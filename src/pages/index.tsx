import { supabase } from '@/utils/supabase'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type { InferGetServerSidePropsType } from "next";
import { api } from '@/utils/api';
// import { api}


export default function Home() {
  const { data, isLoading } = api.lessons.getAll.useQuery();

  if (isLoading) return "Loading..."
  console.log({ data });
  return <div>{
    // lessons.
  }</div>;
}

