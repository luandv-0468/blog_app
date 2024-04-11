<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categories;
use App\Models\Users;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Posts extends Model
{
    use HasFactory;

    protected $table = 'posts';
    protected $primaryKey = 'postId';

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'postId', 'authorId', 'categoryId','title','postDes','postAvatar','content','isPublic','isActive'
    ];

    public function category():BelongsTo {
        return $this->belongsTo(Categories::class, 'categoryId');
    }

    public function author():BelongsTo {
        return $this->belongsTo(Users::class, 'authorId', 'userId');
    }
}