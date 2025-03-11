import * as GameTest from "@minecraft/server-gametest";
import { TicksPerSecond, GameMode } from "@minecraft/server";

GameTest.register("KeepAlive", "keep1", (test) => {
    let player = 
test.spawnSimulatedPlayer({ x: 0, y: 0, z: 0 }, "MrAzmatGMR_Bot");


    test.startSequence()
}).maxTicks(2147483646).tag(GameTest.Tags.suiteDefault);