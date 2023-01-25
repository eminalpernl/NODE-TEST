import test, { describe } from "node:test";
import supertest from "supertest";
import router from "../routes/movies";


// describe("POST /", () => {
//   it("Quick test", () => {
//     expect(1).toBe(1);
//   });
// });

describe('POST /movie', () => {
  describe('', ()=>{

    test('should respond 200 s.c.', async ()=>{
      const response = await request(router).post("/movie").send({
        tittle: "newTitle",
        director: "newDirector",
        release_date: "anyDay"
      })
      expect(response.statusCode).toBe(200)
    })

  })
});
  