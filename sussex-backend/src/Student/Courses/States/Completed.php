<?php
namespace Student\Courses\States;

class Completed
{
    public static string $name = 'completed';

    public function color(): string
    {
        return 'primary';
    }
}
