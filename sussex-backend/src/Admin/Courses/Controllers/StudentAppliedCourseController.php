<?php

namespace Admin\Courses\Controllers;

use App\Filters\FuzzyFilter;
use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class StudentAppliedCourseController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return LengthAwarePaginator
     */
    public function show(int $id): LengthAwarePaginator
    {
        return QueryBuilder::for(Student::with('courses'))
            ->whereHas('courses', function ($query) use ($id) {
                $query->where('course_id', $id);
            })
            ->allowedFilters(['first_name','last_name',
                AllowedFilter::custom(
                    'search',
                    new FuzzyFilter(
                        'first_name',
                               'last_name',
                    ))])
            ->allowedSorts('first_name')
            ->orderByDesc('id')
            ->paginate(request('per_page') <= 200 ? request('per_page') : 15);
    }

}
