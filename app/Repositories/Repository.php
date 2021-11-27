<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class Repository
{
    abstract public function save(array $data, $id = null);

    abstract public function getAll();

    abstract public function findOne($id);

    abstract public function drop($id);
}
