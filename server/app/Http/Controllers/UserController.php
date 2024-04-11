<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use App\Models\Users;
use App\Models\UserRoles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

 
class UserController extends Controller
{
   
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);     
        }

        $postArray = [
            'firstname'      => $request->firstname,
            'lastname'      => $request->lastname,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
            'gender'    => $request->gender,
            // 'avatar'=> $request->file('avatar')->getClientOriginalName()
            'avatar'=> $request->avatar
        ];

        // if ($request->hasFile('avatar')) {
        //     $image = $request->file('avatar');
        //     $name = $image->getClientOriginalName();
        //     $destinationPath = public_path('/upload/images');
        //     $imagePath = $destinationPath . "/" . $name;
        //     $image->move($destinationPath, $name);
        //  }


        $user = Users::create($postArray);
        // $role = ['roleId'=>2, 'userId' => $user["userId"]]
        // $userRoles = UserRoles::create($role);
        return Response()->json(array("statusCode"=> 200, "message"=>'Signup account successfull',"data"=>$user ));
       
    }

    public function signin(Request $request)
    {
        $email = $request->email;
        $password = $request->password;

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);     
        }

        $user = Users::where(['email' => $email])->first();

        if (!$user) {
            return ['statusCode'=>404, 'message'=>'Email or password incorrect'];
        }

        if (!Hash::check($password, $user->password)) {
           return  ['statusCode'=>404, 'message'=>'Email or password incorrect'];
        }

        return $user;
    }

}