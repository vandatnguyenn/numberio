using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarController : MonoBehaviour
{
    public Transform[] WaypointA;
    public Transform[] WaypointB;
    public Transform[] WaypointC;
    public Transform[] WaypointD;
    public Transform[] Waypoint;
    Transform Target;
    Vector3 pos;
    Quaternion rot;
    bool Check;
    int index = 0;
    public float speed=10f;
    // Start is called before the first frame update
    void Start()
    {
        Check = false;
        index = 0;
        pos = transform.position;
        rot = transform.rotation;
    }

    // Update is called once per frame
    void Update()
    {
        if(Check)
        {
            Vector3 dir = Target.position - transform.position;
            transform.right = Target.position - transform.position;
            transform.Translate(dir.normalized * speed * Time.deltaTime, Space.World);
            if(Vector3.Distance(transform.position,Target.position)<0.2f)
            {
                GetNext();
            }
        }
    }
    void GetNext()
    {
        if(index>=Waypoint.Length-1)
        {
            Check = false;
            StartCoroutine(ResetLevel());
            index = 0;
            return;
        }
        index++;
        Target = Waypoint[index];
    }

    IEnumerator ResetLevel()
    {
        yield return new WaitForSeconds(3f);
        transform.position = pos;
        transform.rotation = rot;
    }

    public void ButtonA()
    {
        Waypoint = WaypointA;
        Target = Waypoint[0];
        Check = true;
    }
    public void ButtonB()
    {
        Waypoint = WaypointB;
        Target = Waypoint[0];
        Check = true;
    }
    public void ButtonC()
    {
        Waypoint = WaypointC;
        Target = Waypoint[0];
        Check = true;
    }
    public void ButtonD()
    {
        Waypoint = WaypointD;
        Target = Waypoint[0];
        Check = true;
    }
}
