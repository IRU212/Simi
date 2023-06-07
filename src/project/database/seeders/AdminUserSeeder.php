<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

/**
 *  管理者権限ユーザ
 */
class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'dminuser',
            'email' => 'dmin@gmail.com',
            'password' => Hash::make('dminpassword'),
            'role' => 1
        ]);
    }
}
