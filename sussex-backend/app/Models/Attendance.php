<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use PhpParser\Builder;

/**
 * App\Models\Attendance
 * @property int $id
 * @property int $student_id
 * @property string $month
 * @property integer $monthly_count
 * @property string $attendance
 * @method static Builder organizationFilter($organization_id)
 * @mixin Eloquent
 */
class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [ 'student_id', 'month', 'monthly_count', 'attendance'];

    /**
     * @return BelongsTo
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }

}
