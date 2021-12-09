// This page will show up at the route /mypage

import {
    initPlasmicLoader,
    PlasmicRootProvider,
    PlasmicComponent,
    ComponentRenderData
  } from '@plasmicapp/loader-nextjs';
  import { PLASMIC } from '../plasmic-init';
  
  // Statically fetch the data needed to render Plasmic pages or components.
  export const getStaticProps = async () => {
    // You can pass in multiple page paths or component names.
    const plasmicData = await PLASMIC.fetchComponentData('PATH_OR_COMPONENT');
    return {
      props: {
        plasmicData
        // ...
      }
    };
  };
  
  // Render the page or component from Plasmic.
  export default function MyPage(props: { plasmicData: ComponentRenderData }) {
    return (
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={props.plasmicData}>
        <PlasmicComponent component="PATH_OR_COMPONENT" />
      </PlasmicRootProvider>
    );
  }