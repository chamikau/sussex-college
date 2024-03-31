<?php

namespace Student\News\Controllers;

use App\Models\CourseType;
use App\Models\News;
use App\Models\NewsCategoryType;
use Student\News\Requests\NewsRequest;
use Student\News\Resources\NewsResource;
use App\Filters\FuzzyFilter;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Auth;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class NewsController extends Controller
{

    /**
     * @return LengthAwarePaginator
     */
    public function index(): LengthAwarePaginator
    {
        return QueryBuilder::for(News::with('newsCategoryType'))
            ->allowedFilters(['category_id' , 'headline' , 'content' , 'image',
                AllowedFilter::custom(
                    'search',
                    new FuzzyFilter(
                        'headline',
                    ))])
            ->allowedSorts('category_id' , 'headline' , 'content' , 'image')
            ->orderByDesc('id')
            ->paginate(request('per_page') <= 200 ? request('per_page') : 15);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return NewsResource
     */
    public function show(int $id): NewsResource
    {
        $news = News::with('documents','admin','newsCategoryType')->findOrFail($id);
        return new NewsResource($news);
    }


}
