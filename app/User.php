<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $organisation_id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $address
 * @property string $remember_token
 * @property string $last_login
 * @property string $updated_at
 * @property string $created_at
 * @property boolean $status
 * @property Organisation $organisation
 * @property Budget[] $budgets
 */
class User extends Authenticatable
{
    /**
     * @var array
     */
    protected $fillable = ['organisation_id', 'name', 'email', 'password', 'address', 'remember_token', 'last_login', 'updated_at', 'created_at', 'status'];
    protected $hidden = ['password', 'remember_token'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function organisation()
    {
        return $this->belongsTo('App\Organisation');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function budgets()
    {
        return $this->hasMany('App\Budget');
    }
}
