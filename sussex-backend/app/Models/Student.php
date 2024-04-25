<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use PhpParser\Builder;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

/**
 * App\Models\Student
 * @property int $id
 * @property int $prg_no
 * @property string $first_name
 * @property string $last_name
 * @property string $grade
 * @property string $email
 * @method static Builder organizationFilter($organization_id)
 * @mixin Eloquent
 */
class Student extends Model
{
    use HasFactory,InteractsWithMedia, Notifiable;

    protected $fillable = [ 'prg_no', 'first_name', 'last_name', 'grade', 'email'];

    /**
     * @return HasMany
     */
    public function acvities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * @return HasMany
     */
    public function bookOrder(): HasMany
    {
        return $this->hasMany(BookOrder::class);
    }

    /**
     * @return HasMany
     */
    public function attendance(): HasMany
    {
        return $this->hasMany(Attendance::class);
    }
}
