import React from "react";

export interface Props {
  children: React.ReactNode;
}

export interface Post {
  page: string;
  title: string;
  summary: string;
  tag: string;
  created_at: string;
  updated_at: string;
}
