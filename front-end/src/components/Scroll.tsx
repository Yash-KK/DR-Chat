import { Box, styled } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";

interface ScrollProps {
  children: React.ReactNode;
}

const ScrollContainer = styled(Box)(({ theme }) => ({
    height: `calc(100vh - 190px)`,
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      display: "none", // Hide scrollbar for WebKit browsers (Chrome, Safari)
    },
    scrollbarWidth: "none", // Hide scrollbar for Firefox
    msOverflowStyle: "none", // Hide scrollbar for IE and Edge
  }));
  

export const Scroll: React.FC<ScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, children]);
  return <ScrollContainer ref={scrollRef}>{children}</ScrollContainer>;
};
