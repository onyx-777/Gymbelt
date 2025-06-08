import { CollisionType, DragOperation, Droppable } from "@dnd-kit/abstract";
import { Point } from "@dnd-kit/geometry";

let distanceChange: "increasing" | "decreasing" = "increasing";

/**
 * Collide if we're moving towards an item.
 */
export const directionalCollision = (
  input: { dragOperation: DragOperation; droppable: Droppable },
  previous: Point
) => {
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = dragOperation.shape?.current;

  if (!dragShape || !dropShape) return null;

  const dropCenter = dropShape.center;

  const distanceToPrevious = Math.hypot(
    dropCenter.x - previous.x,
    dropCenter.y - previous.y
  );

  const distanceToCurrent = Math.hypot(
    dropCenter.x - position.current.x,
    dropCenter.y - position.current.y
  );

  distanceChange =
    distanceToCurrent === distanceToPrevious
      ? distanceChange
      : distanceToCurrent < distanceToPrevious
      ? "decreasing"
      : "increasing";

  // Dynamically import the debug code client-side only
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    import("../collision-debug").then(({ collisionDebug }) => {
      collisionDebug(
        dragShape.center,
        dropCenter,
        droppable.id.toString(),
        "rebeccapurple"
      );
    });
  }

  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: CollisionType.Collision,
    };
  }

  return null;
};
