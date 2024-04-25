<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder;

/**
 * App\Models\Exam
 * @property int $id
 * @property string $term
 * @property string $year
 * @property string $grade
 * @property string $table
 * @method static Builder organizationFilter($organization_id)
 * @mixin Eloquent
 */
class Exam extends Model
{
    use HasFactory;

    protected $fillable = [ 'term', 'year', 'grade', 'table'];

}
