<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table("jl_dash_rols")->insert([ "name" => "Empleado Marca", "description" =>  "Puede visualizar todo el dashboard pero no puede hacer cambios", "code" => "eadmi", "status" => config('constants.statuses.active'), "updated_at" =>  Carbon::now(), "created_at" =>  Carbon::now()]);
    }
}
