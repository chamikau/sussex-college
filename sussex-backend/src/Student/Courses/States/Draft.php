<?php
namespace Student\Courses\States;

class Draft
{
    public static string $name = 'draft';

    public function color(): string
    {
        return 'warning';
    }
}
