<?php

namespace Admin\Users\States\UserInvitationState;

use Spatie\ModelStates\State;
use Spatie\ModelStates\StateConfig;

abstract class UserInvitationState extends State
{
    abstract public function color(): string;

    public static function config(): StateConfig
    {
        return parent::config()
            ->default(Sent::class)
            ->allowTransition(Sent::class, Accepted::class);
    }
}
