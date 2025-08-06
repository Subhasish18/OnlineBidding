<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiDocController extends Controller
{
    public function index()
    {
        return response()->json([
            'api_version' => '1.0',
            'base_url' => config('app.url') . '/api',
            'authentication' => [
                'type' => 'Bearer Token',
                'header' => 'Authorization: Bearer {token}',
                'note' => 'Get token from login/register endpoints'
            ],
            'endpoints' => [
                'Authentication' => [
                    'POST /register' => [
                        'description' => 'Register new user',
                        'body' => [
                            'name' => 'string|required',
                            'email' => 'string|email|required|unique',
                            'password' => 'string|min:8|required',
                            'password_confirmation' => 'string|required|same:password'
                        ],
                        'response' => 'User object + token'
                    ],
                    'POST /login' => [
                        'description' => 'Login user',
                        'body' => [
                            'email' => 'string|email|required',
                            'password' => 'string|required'
                        ],
                        'response' => 'User object + token'
                    ],
                    'POST /logout' => [
                        'description' => 'Logout user (requires auth)',
                        'auth' => 'required',
                        'response' => 'Success message'
                    ]
                ],
                'User Profile' => [
                    'GET /profile' => [
                        'description' => 'Get user profile',
                        'auth' => 'required',
                        'response' => 'User profile with stats'
                    ],
                    'PUT /profile' => [
                        'description' => 'Update user profile',
                        'auth' => 'required',
                        'body' => [
                            'name' => 'string|optional',
                            'email' => 'string|email|optional'
                        ]
                    ],
                    'PUT /profile/password' => [
                        'description' => 'Change password',
                        'auth' => 'required',
                        'body' => [
                            'current_password' => 'string|required',
                            'password' => 'string|min:8|required',
                            'password_confirmation' => 'string|required'
                        ]
                    ],
                    'GET /dashboard' => [
                        'description' => 'Get user dashboard stats',
                        'auth' => 'required',
                        'response' => 'User statistics and recent activity'
                    ]
                ],
                'Categories' => [
                    'GET /categories' => [
                        'description' => 'Get all categories',
                        'response' => 'Array of categories with auction counts'
                    ],
                    'GET /categories/{slug}' => [
                        'description' => 'Get category by slug',
                        'response' => 'Category object with auction count'
                    ],
                    'POST /admin/categories' => [
                        'description' => 'Create category (admin)',
                        'auth' => 'required',
                        'body' => [
                            'name' => 'string|required|unique',
                            'description' => 'string|optional',
                            'icon' => 'string|optional'
                        ]
                    ]
                ],
                'Auctions' => [
                    'GET /auctions' => [
                        'description' => 'Get all auctions',
                        'query_params' => [
                            'status' => 'active|ended',
                            'category_id' => 'integer',
                            'search' => 'string'
                        ],
                        'response' => 'Array of auctions'
                    ],
                    'GET /auctions/{id}' => [
                        'description' => 'Get auction by ID',
                        'response' => 'Auction object with bids'
                    ],
                    'POST /auctions' => [
                        'description' => 'Create auction',
                        'auth' => 'required',
                        'body' => [
                            'title' => 'string|required',
                            'description' => 'string|required',
                            'starting_price' => 'numeric|required|min:0.01',
                            'reserve_price' => 'numeric|optional',
                            'start_time' => 'datetime|required',
                            'end_time' => 'datetime|required',
                            'category_id' => 'integer|required',
                            'image' => 'file|image|optional'
                        ]
                    ],
                    'GET /my-auctions' => [
                        'description' => 'Get user auctions',
                        'auth' => 'required'
                    ]
                ],
                'Bidding' => [
                    'GET /auctions/{id}/bids' => [
                        'description' => 'Get auction bids',
                        'response' => 'Array of bids ordered by amount desc'
                    ],
                    'POST /bids' => [
                        'description' => 'Place bid',
                        'auth' => 'required',
                        'body' => [
                            'auction_id' => 'integer|required',
                            'amount' => 'numeric|required|gt:0'
                        ]
                    ],
                    'GET /my-bids' => [
                        'description' => 'Get user bids',
                        'auth' => 'required'
                    ]
                ],
                'Watchlist' => [
                    'GET /watchlist' => [
                        'description' => 'Get user watchlist',
                        'auth' => 'required'
                    ],
                    'POST /watchlist' => [
                        'description' => 'Add to watchlist',
                        'auth' => 'required',
                        'body' => [
                            'auction_id' => 'integer|required'
                        ]
                    ],
                    'DELETE /watchlist/{auctionId}' => [
                        'description' => 'Remove from watchlist',
                        'auth' => 'required'
                    ]
                ]
            ],
            'error_format' => [
                'error' => 'Error message',
                'details' => 'Additional error details (optional)'
            ],
            'success_format' => [
                'message' => 'Success message',
                'data' => 'Response data'
            ]
        ]);
    }
}
