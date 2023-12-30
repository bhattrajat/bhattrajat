"use client";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
type CustomSandpackProps = {
  files: Record<string, string>;
};

const CustomSandpack = (props: CustomSandpackProps) => {
  const { files } = props;
  return (
    <>
      <SandpackProvider
        theme="dark"
        template="react-ts"
        customSetup={{
          dependencies: {
            "framer-motion": "latest",
          },
        }}
        files={files}
      >
        <SandpackLayout
          style={{
            display: "flex",
            minHeight: "900px",
            flexDirection: "column",
          }}
        >
          <SandpackCodeEditor showTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
      {/* <Sandpack
        template="react-ts"
        customSetup={{
          dependencies: {
            "framer-motion": "latest",
          },
        }}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        files={files}
        options={{
          showLineNumbers: true,
          showInlineErrors: true,
          showTabs: true,
          showRefreshButton: true,
          closableTabs: false,
        }}
      /> */}
    </>
  );
};
export default CustomSandpack;
