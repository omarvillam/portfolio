import { LoaderFunctionArgs } from "@remix-run/node";
import {useParams} from "@remix-run/react";
import SpotifyWrapper from "../showcase/components/SpotifyWrapper";
import ComponentLayout from "../showcase/components/ComponentLayout";

export const loader = async ({}: LoaderFunctionArgs) => {
  return true;
};

export default function DynamicComponent() {
  const { component } = useParams();

  const componentsMap: Record<string, JSX.Element> = {
    spotify: <SpotifyWrapper />,
  };

  const componentToRender = componentsMap[component ?? ""] || (
    <p>Error: component not found</p>
  );

  return (
    <ComponentLayout>
      {componentToRender}
    </ComponentLayout>
  );
}
