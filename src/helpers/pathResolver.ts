export default function resolvePath(fileName: string) {
  return import.meta.env.BASE_URL + fileName;
}