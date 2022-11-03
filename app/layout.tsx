export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="dark:bg-gray-900">{children}</body>
    </html>
  );
}
