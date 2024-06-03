"use client";
import { HandleRedirect } from "@/types/route";
import { type NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

interface UseNavigation {
  push: (href: string, options?: NavigateOptions) => void;
  handleBack: VoidFunction;
  handlePush: HandleRedirect;
  handleReplace: HandleRedirect;
}

export const useNavigation = (): UseNavigation => {
  const { push, replace, back } = useRouter();

  const handlePush: HandleRedirect = (url) => () => {
    push(url);
  };

  const handleReplace: HandleRedirect = (url) => () => {
    replace(url);
  };

  const handleBack: VoidFunction = () => {
    back();
  };

  return { push, handleBack, handlePush, handleReplace };
};
