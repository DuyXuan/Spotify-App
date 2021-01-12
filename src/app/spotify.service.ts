import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from './model/Artist';
import { Item } from './model/Item';
import { Track } from './model/Track';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  searchArtistsUrl = 'https://api.spotify.com/v1/search/';
  id = '';
  TOKEN =
    'Bearer BQA3D16k9-cjv9y7wPmIjR4AzSdw6-ZgJkolWjuJud47jbP6GBs5ztasdVjlp7OlV1Vc1HJmCVXu6lags_NQdL_IeGQlpQYQxIIe-GGRZN4tlhIlzQo0KTrRgc_chCrcxTnLY8cV7-kYNt1d-BVqVyaCGgFqLnqOpG8';
  private artistsList: Item[];
  private artistTopTracks: Track[];

  constructor(private httpClient: HttpClient) {}

  getArtists(searchKey): any {
    this.httpClient
      .get(this.searchArtistsUrl, {
        headers: {
          Authorization: this.TOKEN,
        },
        params: {
          q: searchKey,
          type: 'artist',
        },
      })
      .subscribe((data: { artists: Artist }) => {
        this.artistsList = data.artists.items;
      });
    return this.artistsList;
  }

  getTopTracks(ArtistId): any {
    this.id = ArtistId;
    return this.httpClient.get(
      `https://api.spotify.com/v1/artists/${this.id}/top-tracks`,
      {
        headers: {
          Authorization: this.TOKEN,
        },
        params: {
          market: 'US',
        },
      }
    );
  }
}
