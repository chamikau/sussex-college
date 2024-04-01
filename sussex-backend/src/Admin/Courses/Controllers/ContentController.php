<?php

namespace Admin\Courses\Controllers;

use Admin\Courses\Requests\ContentRequest;
use Admin\Courses\Resources\ContentResource;
use Admin\Courses\States\Completed;
use App\Filters\FuzzyFilter;
use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\Course;
use Auth;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ContentController extends Controller
{

    /**
     * @return LengthAwarePaginator
     */
    public function index(): LengthAwarePaginator
    {
        return QueryBuilder::for(Content::with('courses'))
            ->allowedFilters(['content_name','number_of_lectures' , 'lecture_hours' , 'content_description',
                AllowedFilter::custom(
                    'search',
                    new FuzzyFilter(
                        'content_name',
                    ))])
            ->allowedSorts('content_name','number_of_lectures' , 'lecture_hours' , 'content_description')
            ->orderByDesc('id')
            ->paginate(request('per_page') <= 200 ? request('per_page') : 15);
    }

    /**
     * @param ContentRequest $request
     * @return Model|Course
     */
    public function store(ContentRequest $request): Course|Model
    {
        return DB::transaction(function () use ($request) {
        $content = Content::create(collect($request->validated())
            ->put('created_by', Auth::id())
            ->toArray());
            $course = Course::findOrFail($content->course_id);
            $course->state = Completed::$name;
            $course->save();
            return $content;
        });
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return ContentResource
     */
    public function show(int $id): ContentResource
    {
        $course = Content::with('courses')->findOrFail($id);
        return new ContentResource($course);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ContentRequest $request
     * @param int $id
     * @return ContentResource
     */
    public function update(ContentRequest $request, int $id): ContentResource
    {
        $content = Content::findOrFail($id);
        $content->update($request->validated());
        return new ContentResource($content->refresh());
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $record = Content::find($id);
        if (!$record) {
            return response()->json(['error' => 'Record not found'], 404);
        }
        $record->delete();
        return response()->json(['message' => 'Record deleted successfully']);
    }
}
