<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

/**
 * ログイン用ユーザ
 */
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'simiuser',
            'email' => 'simi@gmail.com',
            'password' => Hash::make('simipassword')
        ]);
    }
}
