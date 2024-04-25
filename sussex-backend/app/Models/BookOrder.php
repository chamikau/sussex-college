<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use PhpParser\Builder;

/**
 * App\Models\BookOrder
 * @property int $id
 * @property int $student_id
 * @property int $book_id
 * @property string $state
 * @method static Builder organizationFilter($organization_id)
 * @mixin Eloquent
 */
class BookOrder extends Model
{
    use HasFactory;

    protected $fillable = [ 'student_id', 'book_id', 'state'];

    /**
     * @return BelongsTo
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }

    /**
     * @return BelongsTo
     */
    public function books(): BelongsTo
    {
        return $this->belongsTo(Book::class, 'book_id', 'id');
    }
}
