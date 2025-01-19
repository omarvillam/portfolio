import { Meta, StoryObj } from "@storybook/react";
import {SpotifyTrack} from "./SpotifyTrack";

const meta: Meta<typeof SpotifyTrack> = {
  title: "Components/SpotifyTrack",
  component: SpotifyTrack,
};
export default meta;

type Story = StoryObj<typeof SpotifyTrack>;

export const Default: Story = {
  args: {
    tracks: [
      {url: "/backyard-lofium.mp3", name: "Backyard", thumbnail: "backyard.jpg", artistName: "Lofium", artistLink: "https://pixabay.com/users/fassounds-3433550/"},
      {url: "/chill-jazz-sigmamusicart.mp3", name: "Chill Jazz", thumbnail: "/chilljazz.jpg", artistName: "Sigma Music Art", artistLink: "https://pixabay.com/users/sigmamusicart-36860929/"},
      {url: "/good-night-fassounds.mp3", name: "Good Night", thumbnail: "/goodnight.webp", artistName: "FASSounds", artistLink: "https://pixabay.com/users/lofium-30660321/"},
    ],
  }
};
