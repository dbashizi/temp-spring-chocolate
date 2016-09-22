package com.tiy;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by dbashizi on 9/22/16.
 */
@RestController
public class ChocolateJSONController {

    @RequestMapping(path = "/make-it.json", method = RequestMethod.GET)
    public ChocolateSolution makeChocolate(Integer smalls, Integer bigs, Integer goal) {
        if (smalls == null || bigs == null || goal == null) {
            smalls = 0;
            bigs = 0;
            goal = 0;
        }
        ChocolateSolver solver = new ChocolateSolver();
        ChocolateSolution solution = solver.makeChocolate(smalls, bigs, goal);
        return solution;
    }


}
