import {
  IconNames,
  TemplateItem,
  StudioCommands,
  StudioEvents,
  CreateEditorOptions,
  LayoutCommandProps,
  StudioLayoutButtonConfigProps,
  StudioLayoutPanelAssetsConfigProps,
  StudioLayoutPanelTemplatesConfigProps,
  StudioLayoutComponentsConfigProps,
} from "@grapesjs/studio-sdk/react";
import { Template } from "./templates/template";
import { template1 } from "./templates/template.1";
import { Template2 } from "./templates/template2";
import { Template3 } from "./templates/template3";
import { Template4 } from "./templates/template4";

enum LeftSidebarLayout {
  layoutDesign = "layoutDesign",
  layoutElements = "layoutElements",
  layoutPagesLayers = "layoutPagesLayers",
  layoutAssets = "layoutAssets",
}

const leftSidebarSize = 60;
const topSidebarSize = 50;
const bottomSidebarSize = 50;
const gapFromSidebars = 10;
const iconSize = "24px";
const updateEvent = "change:changesCount";

const customIcons = {
  design:
    '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.68 3h.82v18h-2.17c-3.6 0-5.39 0-6.62-.97a4.5 4.5 0 0 1-.74-.74C3 18.06 3 16.27 3 12.68v-1.35c0-3.6 0-5.39.97-6.61a4.5 4.5 0 0 1 .74-.75C5.94 3 7.73 3 11.32 3h1.35Zm6.6 17.03c-.92.73-2.17.91-4.28.96v-9.97h6v1.65c0 3.6 0 5.4-.97 6.61a4.5 4.5 0 0 1-.74.75ZM21 9.52H15v-6.5c2.1.04 3.36.22 4.29.95.27.22.53.47.74.74.8 1 .94 2.38.96 4.8Z" clip-rule="evenodd"/></svg>',
  elements:
    '<svg viewBox="0 0 24 24"><path d="M5.55 3.05A2.7 2.7 0 0 0 3.2 7.06a8.57 8.57 0 0 0 2.36 2.82 11.86 11.86 0 0 0 1.37.94 6 6 0 0 0 .1.06l.02.01h.01a.75.75 0 0 0 .72 0l.03-.01a9.3 9.3 0 0 0 .41-.25c.27-.17.63-.41 1.02-.73a8.7 8.7 0 0 0 2.34-2.74A2.7 2.7 0 0 0 7.42 3.8a2.68 2.68 0 0 0-1.87-.76Zm10.37.53a1.03 1.03 0 0 1 1.78 0l3.3 5.7a1.03 1.03 0 0 1-.88 1.54H13.5a1.03 1.03 0 0 1-.88-1.55l3.3-5.69Zm.89 17.37a4.21 4.21 0 1 0 0-8.43 4.21 4.21 0 0 0 0 8.43Zm-13.24-7.3a.77.77 0 0 1 .77-.77h6.14a.77.77 0 0 1 .77.77v6.3c0 .34-.28.61-.62.61h-6.3a.77.77 0 0 1-.76-.77v-6.14Z"/></svg>',
  images:
    '<svg viewBox="0 0 24 24"><path d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6" /></svg>',
  windowLink:
    '<svg viewBox="0 0 24 24"><path d="M20.5 7h-17v10.71c0 .48.27.79.5.79h16c.23 0 .5-.31.5-.79V7zM4 4h16c1.1 0 2 1.02 2 2.29V17.7c0 1.27-.9 2.29-2 2.29H4c-1.1 0-2-1.02-2-2.29V6.3C2 5.02 2.9 4 4 4zm8.5 10.86a3.5 3.5 0 0 0-1-6.86h-3a3.5 3.5 0 0 0-.5 6.96v-1.39a2.14 2.14 0 0 1 .54-4.21h2.92a2.14 2.14 0 0 1 1.04 4.01v1.49zM16 10a3.5 3.5 0 0 1-.5 6.96h-3a3.5 3.5 0 0 1-1-6.85v1.45a2.16 2.16 0 0 0 1.03 4.06h2.94a2.16 2.16 0 0 0 .53-4.25V10z"/></svg>',
  desktop:
    '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20 5.5H4a.5.5 0 0 0-.5.5v7.44h17V6a.5.5 0 0 0-.5-.5ZM3.5 16v-1.14h17V16a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5ZM22 16V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v1.58H5.7a.7.7 0 0 0 0 1.42h12.6a.7.7 0 1 0 0-1.42H16V18h4a2 2 0 0 0 2-2Zm-7.5 2h-5v1.58h5V18Z" clip-rule="evenodd"/></svg>',
  mobile:
    '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 4.5h8a.5.5 0 0 1 .5.5v1h-9V5a.5.5 0 0 1 .5-.5Zm-2 3V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7.5Zm10.5 0V15h-9V7.5h9ZM7.5 19v-2.5h9V19a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5Zm3.5-1.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 0-1h-2Z" clip-rule="evenodd"/></svg>',
  info: '<svg viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM8.75 9.85c.05-1.62 1.17-2.8 3.2-2.8 1.87 0 3.12 1.08 3.12 2.6 0 1.04-.52 1.77-1.45 2.33-.9.52-1.15.87-1.15 1.55v.39H10.9l-.01-.47c-.06-1.02.33-1.64 1.28-2.2.84-.5 1.13-.87 1.13-1.54 0-.71-.57-1.23-1.43-1.23-.89 0-1.45.54-1.5 1.37H8.74zm3 7.33c-.68 0-1.13-.43-1.13-1.09 0-.66.45-1.1 1.13-1.1.7 0 1.14.44 1.14 1.1 0 .66-.44 1.09-1.14 1.09z"/></svg>',
  enlarge:
    '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="m14.64 10.43 3.86-3.86v2.68a.75.75 0 0 0 1.5 0V5.5c0-.97-.53-1.5-1.5-1.5h-3.75a.75.75 0 0 0 0 1.5h2.7l-3.88 3.87a.75.75 0 0 0 1.06 1.06Zm-5.27 3.14L5.5 17.44v-2.7a.75.75 0 0 0-1.5 0v3.76c0 .96.53 1.5 1.5 1.5h3.75a.75.75 0 0 0 0-1.5h-2.7l3.88-3.87a.75.75 0 0 0-1.06-1.06Z" clip-rule="evenodd"/></svg>',
};

const createLeftSidebarButton = ({
  icon,
  layout,
  tooltip,
  className,
  removeLayouts,
}: Partial<StudioLayoutButtonConfigProps> & {
  icon: StudioLayoutButtonConfigProps["icon"];
  layout: LayoutCommandProps;
  removeLayouts?: string[];
}): StudioLayoutComponentsConfigProps => {
  return {
    type: "button",
    icon: typeof icon === "string" ? { icon, size: iconSize } : icon,
    tooltip,
    className,
    editorEvents: {
      [`${StudioEvents.layoutToggleId}${layout.id}`]: ({
        fromEvent,
        setState,
      }) => {
        setState({ active: fromEvent.isOpen });
      },
    },
    onClick: ({ editor }) => {
      removeLayouts?.forEach((id) =>
        editor.runCommand(StudioCommands.layoutRemove, { id })
      );
      // Close other left panels
      Object.keys(LeftSidebarLayout).forEach(
        (id) =>
          id !== layout.id &&
          editor.runCommand(StudioCommands.layoutRemove, { id })
      );
      const { style, ...restLayout } = layout;
      editor.runCommand(StudioCommands.layoutToggle, {
        className: "rounded border",
        style: {
          backgroundColor: "white",
          marginLeft: leftSidebarSize + gapFromSidebars,
          marginTop: topSidebarSize + gapFromSidebars,
          height: `calc(100% - ${topSidebarSize}px - ${
            gapFromSidebars * 2
          }px - ${bottomSidebarSize}px)`,
          ...style,
        },
        placer: { type: "absolute", position: "left" },
        ...restLayout,
      });
    },
  };
};

const createTemplatesPanel = () => {
  const templates: TemplateItem[] = [
    {
      id: "template",
      name: "Template",
      data: {
        pages: [
          {
            name: "Home",
            component: Template,
          },
        ],
      },
    },
    {
      id: "template_1",
      name: "Template 1",
      data: {
        pages: [
          {
            name: "Home",
            component: template1,
          },
        ],
      },
    },
    {
      id: "template_2",
      name: "Template 2",
      data: {
        pages: [
          {
            name: "Home",
            component: Template2,
          },
        ],
      },
    },
    {
      id: "template_3",
      name: "Template 3",
      data: {
        pages: [
          {
            name: "Home",
            component: Template3,
          },
        ],
      },
    },
    {
      id: "template_4",
      name: "Template 4",
      data: {
        pages: [
          {
            name: "Home",
            component: Template4,
          },
        ],
      },
    },
  ];

  const templateLayout: StudioLayoutPanelTemplatesConfigProps = {
    type: "panelTemplates",
    content: { itemsPerRow: 2 },
    onSelect({ template, loadTemplate, editor }) {
      loadTemplate(template);
      editor.runCommand(StudioCommands.layoutRemove, {
        id: LeftSidebarLayout.layoutDesign,
      });
    },
    className: "p-2",
    templates,
  };

  return templateLayout;
};

const createAssetsPanel = () => {
  const panel: StudioLayoutPanelAssetsConfigProps = {
    type: "panelAssets",
    className: "p-2",
    content: {
      itemsPerRow: 2,
      header: { addUrl: false },
    },
    onSelect: ({ asset, editor }) => {
      const selected = editor.getSelected();
      let imgCmp = selected?.is("image") ? selected : undefined;
      if (!imgCmp) imgCmp = editor.getWrapper()?.append({ type: "image" })[0];
      if (imgCmp) {
        imgCmp.set({ src: asset.getSrc() });
        editor.select(imgCmp);
      }
    },
  };

  return panel;
};

const toggleActiveCommand = (
  cmd: string
): StudioLayoutButtonConfigProps["editorEvents"] => ({
  [`command:run:${cmd}`]: ({ setState }) => setState({ active: true }),
  [`command:stop:${cmd}`]: ({ setState }) => setState({ active: false }),
});

const createTopbarPanel = () => {
  const separator: StudioLayoutComponentsConfigProps = {
    type: "column",
    style: {
      borderRightWidth: "1px",
      borderRightStyle: "solid",
      alignSelf: "stretch",
      margin: 5,
      opacity: 0.5,
    },
  };
  const panel: StudioLayoutComponentsConfigProps = {
    type: "row",
    className: "text-white gap-2 items-center w-full px-3",
    style: { background: "transparent" },
    children: [
      {
        type: "button",
        tooltip: "Desktop",
        icon: customIcons.desktop,
        className: "gs-top-active",
        onClick: ({ editor }) => editor.Devices.select("desktop"),
        editorEvents: {
          "device:select": ({ editor, setState }) => {
            setState({
              className:
                editor.Devices.getSelected()?.id === "desktop"
                  ? "gs-top-active"
                  : "",
            });
          },
        },
      },
      {
        type: "button",
        tooltip: "Mobile",
        icon: customIcons.mobile,
        onClick: ({ editor }) => editor.Devices.select("mobile"),
        editorEvents: {
          "device:select": ({ editor, setState }) => {
            setState({
              className:
                editor.Devices.getSelected()?.id === "mobile"
                  ? "gs-top-active"
                  : "",
            });
          },
        },
      },
      separator,
      {
        id: "undo",
        type: "button",
        tooltip: "Undo",
        icon: IconNames.arrowULeftTop,
        disabled: true,
        onClick: ({ editor }) => editor.Commands.run("core:undo"),
        editorEvents: {
          [updateEvent]: ({ setState, editor }) =>
            setState({ disabled: !editor.UndoManager.hasUndo() }),
        },
      },
      {
        id: "redo",
        type: "button",
        tooltip: "Redo",
        icon: IconNames.arrowURightTop,
        disabled: true,
        onClick: ({ editor }) => editor.Commands.run("core:redo"),
        editorEvents: {
          [updateEvent]: ({ setState, editor }) =>
            setState({ disabled: !editor.UndoManager.hasRedo() }),
        },
      },
      {
        id: "preview",
        type: "button",
        icon: IconNames.eye,
        label: "Preview",
        onClick: ({ editor }) => editor.Commands.run("core:preview"),
        className: "border rounded px-2 ml-auto",
        editorEvents: toggleActiveCommand("core:preview"),
      },
      {
        id: "publish",
        type: "button",
        label: "Publish",
        icon: customIcons.windowLink,
        className: "border rounded px-2",
        onClick: ({ editor }) => {
          console.log({ projectData: editor.getProjectData() });
        },
      },
    ],
  };

  return panel;
};

const createBottomPanel = () => {
  const panel: StudioLayoutComponentsConfigProps = {
    type: "row",
    className: "gap-2 items-center w-full px-3",
    style: { background: "transparent" },
    children: [
      {
        type: "selectField",
        value: "100",
        className: "ml-auto max-w-24 dash-select-field",
        onChange({ value, editor, setState }) {
          editor.Canvas.setZoom(value);
          setState({ value });
        },
        options: [
          { id: "100", label: "100%" },
          { id: "75", label: "75%" },
          { id: "50", label: "50%" },
          { id: "25", label: "25%" },
          { id: "10", label: "10%" },
        ],
      },
      {
        type: "button",
        icon: { icon: customIcons.enlarge, size: iconSize },
        tooltip: "Fullscreen",
        onClick: ({ editor }) =>
          editor.Commands.isActive("core:fullscreen")
            ? editor.stopCommand("core:fullscreen")
            : editor.runCommand("core:fullscreen", { target: "body" }),
        editorEvents: toggleActiveCommand("core:fullscreen"),
      },
      {
        type: "button",
        icon: { icon: customIcons.info, size: iconSize },
        tooltip: "Ask",
        onClick: ({ editor, event }) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const layout: LayoutCommandProps = {
            id: "askPanel",
            layout: {
              type: "custom",
              component: () => <div className="p-2">Custom Ask componet</div>,
            },
            header: { label: "Ask" },
            placer: {
              type: "popover",
              closeOnClickAway: true,
              x: rect.x,
              y: rect.y,
              w: rect.width,
              h: rect.height,
              options: { placement: "top-end" },
            },
            style: { height: 300, width: 230 },
          };
          editor.runCommand(StudioCommands.layoutToggle, { ...layout });
        },
      },
    ],
  };

  return panel;
};

export const defaultAssets = Array(20)
  .fill(0)
  .map((_, i) => `https://picsum.photos/seed/${i}/300/300`);

export const globalStylesConfig: CreateEditorOptions["globalStyles"] = {
  default: [
    // Body
    {
      id: "bodyBg",
      property: "background-color",
      field: "color",
      selector: "body",
      label: "Body background",
      defaultValue: "white",
      category: { id: "body", label: "Body styles", open: true },
    },
    {
      id: "bodyColor",
      property: "color",
      field: "color",
      selector: "body",
      label: "Body color",
      defaultValue: "#484c51",
      category: { id: "body" },
    },
    // H1
    {
      id: "h1Color",
      property: "color",
      field: "color",
      selector: "h1",
      label: "H1 color",
      defaultValue: "inherit",
      category: { id: "h1", label: "H1", open: true },
    },
    {
      id: "h1Size",
      property: "font-size",
      field: { type: "number", min: 0.1, max: 10, step: 0.1, units: ["rem"] },
      defaultValue: "2rem",
      selector: "h1",
      label: "H1 size",
      category: { id: "h1" },
    },
  ],
};

export const customThemeConfig: CreateEditorOptions["customTheme"] = {
  default: {
    colors: {
      global: {
        // background3: '#f0f1f5',
        text: "rgba(13, 18, 22, .7)",
      },
    },
  },
};

export const deviceConfig: CreateEditorOptions["devices"] = {
  default: [
    {
      id: "desktop",
      name: "Desktop",
      width: "800px",
      widthMedia: "",
    },
    {
      id: "mobile",
      name: "Mobile",
      width: "480px",
    },
  ],
};

export const layoutConfig: CreateEditorOptions["layout"] = {
  default: {
    type: "column",
    className: "h-full",
    children: [
      {
        type: "sidebarTop",
        height: topSidebarSize,
        className: "items-center",
        style: {
          backgroundImage: "linear-gradient(90deg, #d36d9c, #8a5cf5)",
        },
        children: createTopbarPanel(),
      },
      {
        type: "row",
        className: "flex-grow overflow-hidden",
        children: [
          {
            type: "sidebarLeft",
            width: leftSidebarSize,
            resizable: false,
            className: "border-none",
            children: {
              type: "column",
              className: "py-4 gap-5 items-center h-full dash-bg-color",
              children: [
                createLeftSidebarButton({
                  icon: customIcons.design,
                  tooltip: "Design",
                  layout: {
                    id: LeftSidebarLayout.layoutDesign,
                    style: { width: 300 },
                    layout: {
                      type: "tabs",
                      value: "tabTemplates",
                      tabs: [
                        {
                          id: "tabTemplates",
                          label: "Templates",
                          children: createTemplatesPanel(),
                        },
                        {
                          id: "tabStyles",
                          label: "Global Styles",
                          children: { type: "panelGlobalStyles" },
                        },
                      ],
                    },
                    header: { label: "Design" },
                  },
                }),
                createLeftSidebarButton({
                  icon: customIcons.elements,
                  tooltip: "Elements",
                  layout: {
                    id: LeftSidebarLayout.layoutElements,
                    layout: { type: "panelBlocks" },
                    header: { label: "Elements" },
                  },
                }),
                createLeftSidebarButton({
                  icon: "layers",
                  tooltip: "Pages & Layers",
                  layout: {
                    id: LeftSidebarLayout.layoutPagesLayers,
                    layout: { type: "panelPagesLayers" },
                    header: { label: "Pages & Layers" },
                  },
                }),
                createLeftSidebarButton({
                  icon: customIcons.images,
                  tooltip: "Assets",
                  layout: {
                    id: LeftSidebarLayout.layoutAssets,
                    style: { width: 300 },
                    layout: createAssetsPanel(),
                    header: { label: "Assets" },
                  },
                }),
              ],
            },
          },
          {
            type: "column",
            className: "flex-grow",
            children: [
              { type: "canvas", className: "flex-grow dash-bg-color" },
              {
                type: "sidebarBottom",
                height: bottomSidebarSize,
                className: "items-center border-none dash-bg-color",
                children: createBottomPanel(),
              },
            ],
          },
          {
            type: "sidebarRight",
          },
        ],
      },
    ],
  },
};
