import { createClient } from "@supabase/supabase-js";

const URL = "http://localhost:3000";
const KEY = "some.fake.key";

createClient(URL, KEY);

test("Build to succeed", () => {
  // Basic test to ensure TS build is working.
  expect(true).toEqual(true);
});
