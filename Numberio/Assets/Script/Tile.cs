using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tile : MonoBehaviour
{
    public float speed = 3f;
    bool isAnswered = false;
    public float Waittime = 3f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (true)
        {
            while (Waittime>0)
            {
                transform.position -= Vector3.right*speed*Time.deltaTime;
                Waittime -= Time.deltaTime;
            }
            isAnswered = false;
        }
    }
}
