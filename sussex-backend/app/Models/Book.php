<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use PhpParser\Builder;

/**
 * App\Models\Book
 * @property int $id
 * @property string $book_code
 * @property string $grade
 * @property string $name
 * @method static Builder organizationFilter($organization_id)
 * @mixin Eloquent
 */
class Book extends Model
{
    use HasFactory;

    protected $fillable = [ 'book_code', 'grade', 'name'];

    /**
     * @return HasMany
     */
    public function bookOrder(): HasMany
    {
        return $this->hasMany(BookOrder::class);
    }
}
