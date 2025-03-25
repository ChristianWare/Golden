import { WixClient } from "@/lib/wix-client.base";
// import { collections } from "@wix/stores";
import { cache } from "react";

export interface Collection {
  _id: string | null | undefined; // Allow null or undefined
  name: string | null | undefined; // Allow null or undefined
  slug: string | null | undefined; // Allow null or undefined
  bannerImage?: string | null; // Allow bannerImage to be null
  // other fields...
}

export const getCollectionBySlug = cache(
  async (wixClient: WixClient, slug: string) => {
    if (!slug) {
      throw new Error("Slug is undefined");
    }

    const { collection } = await wixClient.collections.getCollectionBySlug(
      slug
    );

    return collection || null;
  }
);

export const getCollections = cache(
  async (wixClient: WixClient): Promise<Collection[]> => {
    const collections = await wixClient.collections
      .queryCollections()
      .ne("_id", "00000000-000000-000000-000000000001") // exclude all products
      .ne("_id", "ad0f827d-ed93-f2df-acd0-d1217420c816") // exclude featured products
      .ne("_id", "689b3443-8426-58a0-a384-97f7bc9788ea") // exclude best sellers
      .find();

    // Normalize data by providing default values for potentially undefined or null fields
    const collectionsWithBannerImage = collections.items.map((collection) => ({
      _id: collection._id || "", // Default to empty string if null or undefined
      name: collection.name || "Unknown Collection", // Default to a name if null or undefined
      slug: collection.slug || "", // Default to empty string if null or undefined
      bannerImage: collection.media?.mainMedia?.image?.url || null, // Ensure bannerImage is a valid string or null
    }));

    return collectionsWithBannerImage;
  }
);
