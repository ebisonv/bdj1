<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $updated_at
 * @property string $created_at
 * @property boolean $status
 * @property User[] $users
 */
class Organisation extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'updated_at', 'created_at', 'status'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }
}
