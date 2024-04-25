<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder;

/**
 * App\Models\NewsAchievement
 * @property int $id
 * @property string $title
 * @property string $category
 * @property integer $state
 * @property string description
 * @method static Builder organizationFilter($organization_id)
 * @mixin Eloquent
 */
class NewsAchievement extends Model
{
    use HasFactory;

    protected $fillable = [ 'title', 'category', 'state', 'description'];

}
