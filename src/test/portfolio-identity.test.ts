import { describe, expect, it } from "vitest";
import { PROFILE_NAME } from "@/routes/index";

describe("communications portfolio identity", () => {
  it("uses Leonard Festus Tsuma's name", () => {
    expect(PROFILE_NAME).toBe("Leonard Festus Tsuma");
  });
});