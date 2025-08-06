<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'icon' => $this->icon,
            'auctions_count' => $this->when(
                $this->relationLoaded('auctions') || isset($this->auctions_count),
                $this->auctions_count ?? $this->auctions()->count()
            ),
            'active_auctions_count' => $this->when(
                $this->relationLoaded('activeAuctions'),
                $this->active_auctions_count
            ),
            'url' => $this->url,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
