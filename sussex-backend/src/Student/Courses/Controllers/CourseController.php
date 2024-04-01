<?php

namespace Student\Courses\Controllers;

use Student\Courses\Resources\CourseResource;
use App\Filters\FuzzyFilter;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Auth;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use Student\Courses\States\Completed;

class CourseController extends Controller
{

    /**
     * @return LengthAwarePaginator
     */
    public function index(): LengthAwarePaginator
    {
        return QueryBuilder::for(Course::where('state' , Completed::$name)
        ->with('courseType','contents','students'))
            ->allowedFilters(['name','course_type_id',
                AllowedFilter::custom(
                    'search',
                    new FuzzyFilter(
                        'name',
                    ))])
            ->allowedSorts('name','course_type_id' , 'description')
            ->orderByDesc('id')
            ->paginate(request('per_page') <= 200 ? request('per_page') : 15);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return CourseResource
     */
    public function show(int $id): CourseResource
    {
        $userId = Auth::id();
        $course = Course::with('courseType','contents','students','studentCourseApplied')->findOrFail($id);
        $userIdAndApplicantListMatch = false;
        foreach ($course->studentCourseApplied as $courseAppliedList) {
            $appliedState = $courseAppliedList->state;
            $studentId = $courseAppliedList->student_id;
            if ($appliedState === 'applied' && $studentId === $userId) {
                $userIdAndApplicantListMatch = true;
                break;
            }
        }
        return new CourseResource($course, $userIdAndApplicantListMatch);
    }


}
