
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <Separator className="mb-6" />
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Chellappan G.</p>
          <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
