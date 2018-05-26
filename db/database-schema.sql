DO
$do$
BEGIN
  SET client_encoding = 'UTF8';

  DROP TABLE IF EXISTS public.accounts;


  CREATE TABLE public.accounts(
    id SERIAL PRIMARY KEY
  , "firstname" text
  , "lastname" text
  , "email" text UNIQUE
  , "phone" text UNIQUE
  , "createdAt" timestamp with time zone NOT NULL default now()
  , "updatedAt" timestamp with time zone NOT NULL default now()
  )
  WITH (
    OIDS=FALSE
  );
  ALTER TABLE public.accounts
    OWNER TO "user";
END
$do$;
