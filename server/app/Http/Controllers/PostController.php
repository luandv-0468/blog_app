<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use App\Models\Posts;
use Illuminate\Http\Request;
 
class PostController extends Controller
{
   
    public function getPostList(Request $request)
    {
        $page = $request->query->get('page');
        $limit = $request->query->get('limit');
        
        $posts = Posts::with('author', 'category')->paginate($limit, ['*'], 'page', $page);

        return $posts;
    }

}