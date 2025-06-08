"use client";

import {
  Button,
  Puck,
  Render,
} from "@/components/pages/gym/admin/features/website/core";
import { useDemoData } from "@/components/pages/gym/admin/features/website/lib/use-demo-data";
import { useEffect, useState } from "react";
import { useMetadata } from "@/components/pages/gym/admin/features/website/lib/use-metadata";
import headingAnalyzer from "@/components/pages/gym/admin/features/website/core/components/HeadingAnalyzer/HeadingAnalyzer";
import config from "@/components/pages/gym/admin/features/website/config";

export function Client({ path, isEdit }: { path: string; isEdit: boolean }) {
  console.log("[...puckPath] is rendering");
  const { metadata } = useMetadata();

  const { data, resolvedData, key } = useDemoData({
    path,
    isEdit,
    metadata,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const params = new URL(window.location.href).searchParams;

  if (isEdit) {
    return (
      <div>
        <Puck
          config={config}
          data={data}
          onPublish={async (data) => {
            console.log("localStorage - setting item : ", key, "-", data);
            localStorage.setItem(key, JSON.stringify(data));
          }}
          plugins={[
            headingAnalyzer as unknown as import("@/components/pages/gym/admin/features/website/core/types/API/index").Plugin,
          ]}
          headerPath={path}
          iframe={{
            enabled: params.get("disableIframe") === "true" ? false : true,
          }}
          overrides={{
            headerActions: ({ children }) => (
              <>
                <div>
                  <Button href={path} newTab variant="secondary">
                    View page
                  </Button>
                </div>

                {children}
              </>
            ),
          }}
          metadata={metadata}
        />
      </div>
    );
  }

  if (data.content) {
    return <Render config={config} data={resolvedData} metadata={metadata} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page does not exist in session storage</p>
      </div>
    </div>
  );
}

export default Client;
