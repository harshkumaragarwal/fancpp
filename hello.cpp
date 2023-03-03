#include <iostream>
using namespace std;
double _rotateAngle;
double _nr;

void speedUpdate(double factor, double &rotateAngle, double &nr)
{
    if (factor == 1)
    {
        if (rotateAngle <= -0.005)
            rotateAngle = -1 * rotateAngle;
        nr = rotateAngle;
    }
    else if (factor == -1)
    {
        if (rotateAngle >= 0.005)
            rotateAngle = -1 * rotateAngle;
        nr = rotateAngle;
    }
    else if (factor == 3)
    {
        rotateAngle = nr;
    }
    else if (factor == 0)
    {
        rotateAngle = 0;
    }
    else
    {
        rotateAngle = factor * rotateAngle;
        nr = rotateAngle;
    }
    _nr = nr;
    _rotateAngle = rotateAngle;
}

int main()
{
    double a, b, c;
    cin >> a >> b >> c;
    speedUpdate(a, b, c);
    cout << b << " " << c;
    // return 0;
}