import { Button } from '@payloadcms/ui';
import { signin } from 'payload-auth-plugin/client';

export const AuthComponent = () => {
  return (
    <form
      action={async () => {
        'use server';
        signin('google');
      }}
      method="GET"
      className="w-full"
    >
      <Button type="submit" className="w-full !my-0">
        Sign in with Google
      </Button>
    </form>
  );
};
