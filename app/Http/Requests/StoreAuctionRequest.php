<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuctionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:5000',
            'starting_price' => 'required|numeric|min:0.01',
            'reserve_price' => 'nullable|numeric|min:0|gte:starting_price',
            'start_time' => 'required|date|after_or_equal:now',
            'end_time' => 'required|date|after:start_time',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120', // 5MB max
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Auction title is required.',
            'title.max' => 'Auction title cannot exceed 255 characters.',
            'description.required' => 'Auction description is required.',
            'description.max' => 'Description cannot exceed 5000 characters.',
            'starting_price.required' => 'Starting price is required.',
            'starting_price.min' => 'Starting price must be at least $0.01.',
            'reserve_price.gte' => 'Reserve price must be greater than or equal to starting price.',
            'start_time.after_or_equal' => 'Start time must be in the future.',
            'end_time.after' => 'End time must be after start time.',
            'category_id.required' => 'Please select a category.',
            'category_id.exists' => 'Selected category does not exist.',
            'image.image' => 'File must be an image.',
            'image.mimes' => 'Image must be a JPEG, PNG, JPG, or WebP file.',
            'image.max' => 'Image size cannot exceed 5MB.',
        ];
    }
}
