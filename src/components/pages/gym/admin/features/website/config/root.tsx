import {
  DefaultRootProps,
  DropZone,
  RootConfig,
} from "@/components/pages/gym/admin/features/website/core";
import { Footer } from "./blocks/Footer";
import { PaintBucket, Text } from "lucide-react";

export type RootProps = DefaultRootProps;

export type RootConfigProps = {
  backgroundColor: string;
  textColor: string;
};

export const Root: RootConfig<RootProps & RootConfigProps> = {
  fields: {
    backgroundColor: {
      label: "Background Color",
      labelIcon: <PaintBucket />,
      type: "text",
      placeholder: "white",
    },
    textColor: {
      label: "Text Color",
      labelIcon: <Text />,
      type: "text",
      placeholder: "black",
    },
  },
  defaultProps: {
    title: "My Page",
    backgroundColor: "white",
    textColor: "black",
  },
  render: ({ backgroundColor, textColor }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          maxWidth: "100vw",
          backgroundColor,
          color: textColor,
        }}
      >
        {/* <Header editMode={puck.isEditing} /> */}
        <DropZone zone="default-zone" style={{ flexGrow: 1 }} />
        <Footer />
        {/* <Footer>
          <Footer.List title="Section">
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
          </Footer.List>
          <Footer.List title="Section">
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
          </Footer.List>
          <Footer.List title="Section">
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
          </Footer.List>
          <Footer.List title="Section">
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
            <Footer.Link href="#">Label</Footer.Link>
          </Footer.List>
        </Footer> */}
      </div>
    );
  },
};

export default Root;
