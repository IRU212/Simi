<?php

namespace Tests\Unit\Auth;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

use App\Models\User;

class UserTest extends TestCase
{
    /**
     * ユーザログイン情報
     *
     * @return void
     */
    public function test_user_index()
    {
        $response = $this->get(route('user.index'));

        $response->assertStatus(200);
    }

    /**
     * ユーザプロフィール情報
     *
     * @return void
     */
    public function test_user_show()
    {
        $response = $this->get(route('user.show',4));

        $response->assertStatus(200);
    }

    /**
     * ユーザプロフィール編集
     *
     * @return void
     */
    public function test_user_edit()
    {
        $response = $this->post(route('user.edit'),[
            'name' => 'ccccc'
        ]);

        $response->assertStatus(200);
    }
}
