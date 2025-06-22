import { client } from "db/client";

export default async function Home() {
  const users = await client.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A component that renders two `next/image`s with different sources depending on the current theme.
 *
 * The component will render two images, one with the class `imgLight` and one with the class `imgDark`.
 * The image with the class `imgLight` will be displayed when the current theme is light,
 * and the image with the class `imgDark` will be displayed when the current theme is dark.
 *
 * The component will automatically switch between the two images when the theme changes.
 *
 * The component accepts all the props that the `next/image` component accepts,
 * plus two additional props: `srcLight` and `srcDark`.
 * The `srcLight` prop should be the source of the image to be displayed when the current theme is light,
 * and the `srcDark` prop should be the source of the image to be displayed when the current theme is dark.
 *
 * The component also accepts a `className` prop, which will be passed to both images.
 */
/*******  1a21f990-eff8-404a-9f0b-8fa5b68c223b  *******/}

// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
